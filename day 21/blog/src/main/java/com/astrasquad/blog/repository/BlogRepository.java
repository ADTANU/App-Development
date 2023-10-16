package com.astrasquad.blog.repository;
import com.astrasquad.blog.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blog, Long> {
	
}
