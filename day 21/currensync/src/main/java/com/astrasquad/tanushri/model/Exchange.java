package com.astrasquad.tanushri.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "_exchange")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Exchange {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Integer ExchangeID;
	 private String currency;
	 private Double value1;
	 private String change1;
	 
}
