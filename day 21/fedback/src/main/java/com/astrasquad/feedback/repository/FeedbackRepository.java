package com.astrasquad.feedback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.astrasquad.feedback.model.Feedback;

public interface FeedbackRepository  extends JpaRepository<Feedback, Long>  {

}
