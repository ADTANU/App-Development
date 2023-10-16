package com.astrasquad.tanushri.model;


import java.util.Date;
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
@Table(name = "_deposit")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Deposit {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long did;
	private String holderName;
	private Integer anumber;
	private String accName;
	private Date ddate;
	private String dnotes;
	private Integer dphone;
	private String dctype;
	private Integer damount;

 
}
