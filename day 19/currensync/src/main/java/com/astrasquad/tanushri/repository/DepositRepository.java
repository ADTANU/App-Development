package com.astrasquad.tanushri.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.astrasquad.tanushri.model.Deposit;

@Repository
public interface DepositRepository extends JpaRepository<Deposit, Long> {
}

