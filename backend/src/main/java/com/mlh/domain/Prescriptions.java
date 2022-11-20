package com.mlh.domain;

import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id; 

@Entity
public class Prescriptions {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	
	private Long id; 
	
	private String prescriptionName; 
	private String dosage;
	private String indicationOfActiveSubstance;
	private String releaseFormPackagingIngridients;
	private String dosageInterval;
	private String sideEffects;
	private String restrictions;
	private String comments;
	
	public Long getId() {
		return id;
	} 
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public Prescriptions() {
		super();
	}
	public Prescriptions(Long id, String prescriptionName, String dosage, String indicationOfActiveSubstance, String releaseFormPackagingIngridients,
			String dosageInterval, String sideEffects, String restrictions, String comments) {
		super();
		this.id = id;
		this.prescriptionName = prescriptionName;
		this.dosage = dosage;
		this.indicationOfActiveSubstance = indicationOfActiveSubstance;
		this.releaseFormPackagingIngridients = releaseFormPackagingIngridients;
		this.dosageInterval = dosageInterval;
		this.sideEffects = sideEffects;
		this.restrictions = restrictions;
		this.comments = comments;
	}
		
	 public Prescriptions(String prescriptionName, String dosage, String indicationOfActiveSubstance, String releaseFormPackagingIngridients,
				String dosageInterval, String sideEffects, String restrictions, String comments) {
			super();
			this.prescriptionName = prescriptionName;
			this.dosage = dosage;
			this.indicationOfActiveSubstance = indicationOfActiveSubstance;
			this.releaseFormPackagingIngridients = releaseFormPackagingIngridients;
			this.dosageInterval = dosageInterval;
			this.sideEffects = sideEffects;
			this.restrictions = restrictions;
			this.comments = comments;
	}

	public String getPrescriptionName() {
		return prescriptionName;
	}
	public void setPrescriptionName(String prescriptionName) {
		this.prescriptionName = prescriptionName;
	}
	public String getDosage() {
		return dosage;
	}
	public void setDosage(String dosage) {
		this.dosage = dosage;
	}
	public String getIndicationOfActiveSubstance() {
		return indicationOfActiveSubstance;
	}
	public void setIndicationOfActiveSubstance(String colour) {
		this.indicationOfActiveSubstance = colour;
	}
	public String getReleaseFormPackagingIngridients() {
		return releaseFormPackagingIngridients;
	}
	public void setReleaseFormPackagingIngridients(String releaseFormPackagingIngridients) {
		this.releaseFormPackagingIngridients = releaseFormPackagingIngridients;
	}
	public String getDosageInterval() {
		return dosageInterval;
	}
	public void setDosageInterval(String dosageInterval) {
		this.dosageInterval = dosageInterval;
	}
	public String getSideEffects() {
		return sideEffects;
	}
	public void setSideEffects(String sideEffects) {
		this.sideEffects = sideEffects;
	}
	public String getRestrictions() {
		return restrictions;
	}
	public void setRestrictions(String restrictions) {
		this.restrictions = restrictions;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	} 
	
}
