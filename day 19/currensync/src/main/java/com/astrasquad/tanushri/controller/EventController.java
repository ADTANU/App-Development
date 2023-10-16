package com.astrasquad.tanushri.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.astrasquad.tanushri.dto.EventRequestDTO;
import com.astrasquad.tanushri.dto.EventResponseDTO;
import com.astrasquad.tanushri.dto.UserDTO;
import com.astrasquad.tanushri.model.Event;
import com.astrasquad.tanushri.model.User;
import com.astrasquad.tanushri.repository.UserRepository;
import com.astrasquad.tanushri.service.EventService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/transaction")
public class EventController {

    @Autowired
    private EventService eventService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/post")
    public ResponseEntity<EventResponseDTO> createEvent(@RequestBody EventRequestDTO eventRequestDTO) {
		Event event = new Event();
        event.setName(eventRequestDTO.getName());
        event.setDescription(eventRequestDTO.getDescription());
        event.setFromCurrency(eventRequestDTO.getFromCurrency());
        event.setToCurrency(eventRequestDTO.getToCurrency());
        event.setDate(eventRequestDTO.getDate());
        event.setAmount(eventRequestDTO.getAmount());
        
        // Set other relevant fields

        // Call the service layer to create the event
        Event createdEvent = eventService.createEvent(event);

        // Map the created event entity to the response DTO within the controller method
        EventResponseDTO responseDTO = new EventResponseDTO();
        responseDTO.setTransactionID(createdEvent.getTransactionID());
        responseDTO.setName(createdEvent.getName());
        responseDTO.setDescription(createdEvent.getDescription());
        responseDTO.setFromCurrency(createdEvent.getFromCurrency());
        responseDTO.setToCurrency(createdEvent.getToCurrency());
        responseDTO.setDate(createdEvent.getDate());
        responseDTO.setAmount(createdEvent.getAmount());
        

        return ResponseEntity.ok(responseDTO);
    }

    @GetMapping("/get/{eventID}")
    public ResponseEntity<EventResponseDTO> getEvent(@PathVariable Integer eventID) {
        // Call the service layer to retrieve the event by ID
        Event event = eventService.getEventById(eventID);

        // Map the event entity to the response DTO within the controller method
        EventResponseDTO responseDTO = new EventResponseDTO();
        responseDTO.setTransactionID(event.getTransactionID());
        responseDTO.setName(event.getName());
        responseDTO.setDescription(event.getDescription());
        responseDTO.setFromCurrency(event.getFromCurrency());
        responseDTO.setToCurrency(event.getToCurrency());
        responseDTO.setDate(event.getDate());
        responseDTO.setAmount(event.getAmount());
        
        // Set other relevant fields

        return ResponseEntity.ok(responseDTO);
    }

    @GetMapping("/get")
    public ResponseEntity<List<EventResponseDTO>> getAllEvents() {
        // Call the service layer to retrieve all events
        List<Event> events = eventService.getAllEvents();

        // Map the list of event entities to a list of response DTOs within the controller method
        List<EventResponseDTO> responseDTOs = events.stream()
                .map(event -> {
                    EventResponseDTO responseDTO = new EventResponseDTO();
                    responseDTO.setTransactionID(event.getTransactionID());
                    responseDTO.setName(event.getName());
                    responseDTO.setDescription(event.getDescription());
                    responseDTO.setFromCurrency(event.getFromCurrency());
                    responseDTO.setToCurrency(event.getToCurrency());
                    responseDTO.setDate(event.getDate());
                    responseDTO.setAmount(event.getAmount());
                    // Set other relevant fields
                    return responseDTO;
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(responseDTOs);
    }

    @PutMapping("/put/{eventID}")
    public ResponseEntity<EventResponseDTO> updateEvent(@PathVariable Integer eventID, @RequestBody EventRequestDTO eventRequestDTO) {
        // Call the service layer to update the event by ID
        Event existingEvent = eventService.getEventById(eventID);

        // Update the existing event entity with the data from the DTO
        existingEvent.setName(eventRequestDTO.getName());
        existingEvent.setDescription(eventRequestDTO.getDescription());
        existingEvent.setFromCurrency(eventRequestDTO.getFromCurrency());
        existingEvent.setToCurrency(eventRequestDTO.getToCurrency());
        existingEvent.setDate(eventRequestDTO.getDate());
        existingEvent.setAmount(eventRequestDTO.getAmount());
        // Update other relevant fields

        // Call the service layer to save the updated event
        Event updatedEvent = eventService.updateEvent(existingEvent);

        // Map the updated event entity to the response DTO within the controller method
        EventResponseDTO responseDTO = new EventResponseDTO();
        responseDTO.setTransactionID(updatedEvent.getTransactionID());
        responseDTO.setName(updatedEvent.getName());
        responseDTO.setDescription(updatedEvent.getDescription());
        responseDTO.setFromCurrency(updatedEvent.getFromCurrency());
        responseDTO.setToCurrency(updatedEvent.getToCurrency());
        responseDTO.setDate(updatedEvent.getDate());
        responseDTO.setAmount(updatedEvent.getAmount());
        // Set other relevant fields

        return ResponseEntity.ok(responseDTO);
    }

    @DeleteMapping("/del/{eventID}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Integer eventID) {
        // Call the service layer to delete the event by ID
        eventService.deleteEvent(eventID);

        return ResponseEntity.noContent().build();
    }

}
