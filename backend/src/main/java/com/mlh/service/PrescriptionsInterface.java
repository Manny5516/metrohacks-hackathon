package com.mlh.service;
import java.util.List;
import com.mlh.domain.Prescriptions;

public interface PrescriptionsInterface<T> {

	Prescriptions create(Prescriptions x); 
	
		List<Prescriptions> read();
		
		Prescriptions readId(T id); 
		
		Prescriptions update(T id, Prescriptions y); 
		
		Prescriptions delete(T id);
}
