package com.astrasquad.tanushri.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.astrasquad.tanushri.model.Event;

public interface EventRepository  extends JpaRepository<Event, Integer>  {

}
