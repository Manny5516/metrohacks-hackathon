package com.mlh.service;

import java.util.List;
import org.springframework.stereotype.Service;
import java.util.Optional;
import com.mlh.domain.Prescriptions;
import com.mlh.repo.PrescriptionsRepo;

@Service
public class PrescriptionsServiceDB implements PrescriptionsInterface<Long>{

	private PrescriptionsRepo repo;
	
	public PrescriptionsServiceDB(PrescriptionsRepo repo) {
		super();
		this.repo = repo;
	}
	
	@Override 
	public Prescriptions create(Prescriptions x) {
		return this.repo.save(x);
	}
	
	@Override 
	public List<Prescriptions> read() {
		return this.repo.findAll(); 
	}
	
	@Override 
	public Prescriptions readId(Long id) {
		Optional<Prescriptions> optRead = this.repo.findById(id);
		return optRead.orElse(null); 
	}
	
	@Override
	public Prescriptions update(Long id, Prescriptions y) {
		Optional<Prescriptions> optPres = this.repo.findById(id); 
		Prescriptions found = optPres.get(); 
		found.setPrescriptionName(y.getPrescriptionName()); 
		found.setDosage(y.getDosage()); 
		found.setIndicationOfActiveSubstance(y.getIndicationOfActiveSubstance()); 
		found.setReleaseFormPackagingIngridients(y.getReleaseFormPackagingIngridients());
		found.setDosageInterval(y.getDosageInterval());
		found.setSideEffects(y.getSideEffects());
		found.setRestrictions(y.getRestrictions());
		found.setComments(y.getComments());
		return this.repo.save(found);
	}
	
	@Override
	public Prescriptions delete(Long id) {
		Optional<Prescriptions> toDelete = this.repo.findById(id);
		this.repo.deleteById(id);
		return toDelete.orElse(null);	
	}
	
}
