package com.astrasquad.tanushri.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.astrasquad.tanushri.model.Feedback;


public interface FeedbackRepository extends JpaRepository<Feedback,Long> {

}
