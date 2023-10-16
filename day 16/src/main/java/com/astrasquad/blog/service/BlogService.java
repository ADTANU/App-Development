package com.astrasquad.blog.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.astrasquad.blog.model.Blog;
import com.astrasquad.blog.repository.BlogRepository;

@Service
public class BlogService {  
	@Autowired
    private BlogRepository blogRepository;

    public Blog createBlog(Blog blog) {
        // Implement logic to create and save an event
        return blogRepository.save(blog);
    }

    public Blog getBlogById(Long blogid) {
        // Implement logic to retrieve an event by ID
        Optional<Blog> blogOptional = blogRepository.findById(blogid);
        return blogOptional.orElse(null);
    }

    public List<Blog> getAllBlogs() {
        // Implement logic to retrieve all events
        return blogRepository.findAll();
    }

    public Blog updateBlog(Blog blog) {
        // Implement logic to update and save an event
        return blogRepository.save(blog);
    }

    public void deleteBlog(Long blogid) {
        // Implement logic to delete an event by ID
    	blogRepository.deleteById(blogid);
    }
}
