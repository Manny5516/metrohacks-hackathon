package com.mlh.rest;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mlh.domain.Prescriptions;
import com.mlh.service.PrescriptionsServiceDB;

@RestController
public class PrescriptionsController {

	private PrescriptionsServiceDB service;
	
	public PrescriptionsController(PrescriptionsServiceDB service) {
		super();
		this.service = service;
	}
	
	@PostMapping("create")
	public ResponseEntity<Prescriptions> createPrescriptions(@RequestBody Prescriptions a) {
		return new ResponseEntity<Prescriptions>(this.service.create(a), HttpStatus.CREATED);		
	}
	
	@GetMapping("readAll")
	public ResponseEntity<List<Prescriptions>> readAllPrescriptions() { 
	return new ResponseEntity<List<Prescriptions>>(this.service.read(), HttpStatus.ACCEPTED); 
	}
	
	@GetMapping("readById/{id}")
	public ResponseEntity<Prescriptions> getById(@PathVariable Long id) { 
		return new ResponseEntity<Prescriptions>(this.service.readId(id), HttpStatus.NON_AUTHORITATIVE_INFORMATION); 
	}
	
	@PutMapping("update/{id}")	
	public ResponseEntity<Prescriptions> update(@PathVariable Long id, @RequestBody Prescriptions updated) {
		return new ResponseEntity<Prescriptions>(this.service.update(id, updated),HttpStatus.IM_USED); 
	}
	
	@DeleteMapping("delete/{id}")
	public ResponseEntity<Prescriptions> delete(@PathVariable Long id) {
		return new ResponseEntity<Prescriptions>(this.service.delete(id),HttpStatus.GONE); 
} 
}
