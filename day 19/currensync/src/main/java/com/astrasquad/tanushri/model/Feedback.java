package com.astrasquad.tanushri.model;

import java.util.Map;

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
@Table(name = "_feedback")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Feedback {
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	   private Long fid;

  private String name;
  private String message;
}
