package com.mlh.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.mlh.domain.Prescriptions;

@Repository
public interface PrescriptionsRepo extends JpaRepository<Prescriptions, Long> {

}
