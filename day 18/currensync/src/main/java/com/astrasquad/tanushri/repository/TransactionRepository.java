package com.astrasquad.tanushri.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.astrasquad.tanushri.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}


