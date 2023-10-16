package com.astrasquad.blog.DTO;



import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BlogRequest {
	
	    private String title;
	    private Date date;
	    private String author;
	    private String content;


}
