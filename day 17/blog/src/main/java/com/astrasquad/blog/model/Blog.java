package com.astrasquad.blog.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "blog_data")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long blogid;
    private String title;
    private Date date;
    private String author;
    private String content;
	
    // Constructors, getters, and setters
}
