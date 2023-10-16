package com.astrasquad.blog.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.astrasquad.blog.DTO.BlogRequest;
import com.astrasquad.blog.DTO.BlogResponse;
import com.astrasquad.blog.model.Blog;
import com.astrasquad.blog.repository.BlogRepository;
import com.astrasquad.blog.service.BlogService;

import io.micrometer.observation.Observation.Event;

@RestController
@RequestMapping("/api/blogs")
public class BlogController {

	@Autowired
    private BlogService blogService;
    @Autowired
    private BlogRepository blogRepository;
    
    @PostMapping("/post")
    public ResponseEntity<BlogResponse> createBlog(@RequestBody BlogRequest blogRequestDTO) {
		Blog blog = new Blog();
		blog.setTitle(blogRequestDTO.getTitle());
		blog.setDate(blogRequestDTO.getDate());
		blog.setAuthor(blogRequestDTO.getAuthor());
		blog.setContent(blogRequestDTO.getContent());
        
        // Set other relevant fields

        // Call the service layer to create the event
        Blog createdBlog = blogService.createBlog(blog);

        // Map the created event entity to the response DTO within the controller method
        BlogResponse responseDTO = new BlogResponse();
        responseDTO.setBlogid(createdBlog.getBlogid());
        responseDTO.setTitle(createdBlog.getTitle());
        responseDTO.setDate(createdBlog.getDate());
        responseDTO.setAuthor(createdBlog.getAuthor());
        responseDTO.setContent(createdBlog.getContent());
        

        return ResponseEntity.ok(responseDTO);
    }
    
    @GetMapping("/get/{blogid}")
    public ResponseEntity<BlogResponse> getBlog(@PathVariable Long blogid) {
        // Call the service layer to retrieve the event by ID
        Blog blog = blogService.getBlogById(blogid);

        // Map the event entity to the response DTO within the controller method
        BlogResponse responseDTO = new BlogResponse();
        responseDTO.setBlogid(blog.getBlogid());
        responseDTO.setTitle(blog.getTitle());
        responseDTO.setDate(blog.getDate());
        responseDTO.setAuthor(blog.getAuthor());
        responseDTO.setContent(blog.getContent());
        
        // Set other relevant fields

        return ResponseEntity.ok(responseDTO);
    }
    
    @GetMapping("/get")
    public ResponseEntity<List<BlogResponse>> getAllBlogs() {
        // Call the service layer to retrieve all events
        List<Blog> blogs = blogService.getAllBlogs();

        // Map the list of event entities to a list of response DTOs within the controller method
        List<BlogResponse> responseDTOs = blogs.stream()
                .map(blog -> {
                	BlogResponse responseDTO = new BlogResponse();
                    responseDTO.setBlogid(blog.getBlogid());
                    responseDTO.setTitle(blog.getTitle());
                    responseDTO.setDate(blog.getDate());
                    responseDTO.setAuthor(blog.getAuthor());
                    responseDTO.setContent(blog.getContent());
                    // Set other relevant fields
                    return responseDTO;
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(responseDTOs);
    }
    
    @PutMapping("/put/{blogid}")
    public ResponseEntity<BlogResponse> updateBlog(@PathVariable Long blogid, @RequestBody BlogRequest blogRequestDTO) {
        // Call the service layer to update the event by ID
        Blog existingBlog = blogService.getBlogById(blogid);

        // Update the existing event entity with the data from the DTO
        existingBlog.setTitle(blogRequestDTO.getTitle());
        existingBlog.setDate(blogRequestDTO.getDate());
        existingBlog.setAuthor(blogRequestDTO.getAuthor());
        existingBlog.setContent(blogRequestDTO.getContent());
        // Update other relevant fields

        // Call the service layer to save the updated event
        Blog updatedBlog = blogService.updateBlog(existingBlog);

        // Map the updated event entity to the response DTO within the controller method
        BlogResponse responseDTO = new BlogResponse();
        responseDTO.setBlogid(updatedBlog.getBlogid());
        responseDTO.setTitle(updatedBlog.getTitle());
        responseDTO.setDate(updatedBlog.getDate());
        responseDTO.setAuthor(updatedBlog.getAuthor());
        responseDTO.setContent(updatedBlog.getContent());
        // Set other relevant fields

        return ResponseEntity.ok(responseDTO);
    }
    
    @DeleteMapping("/del/{blogid}")
    public ResponseEntity<Void> deleteBlog(@PathVariable Long blogid) {
        // Call the service layer to delete the event by ID
        blogService.deleteBlog(blogid);

        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/getblog")
    public String getBlog() {
    	return "Blog Tanu";
    }
    
}
