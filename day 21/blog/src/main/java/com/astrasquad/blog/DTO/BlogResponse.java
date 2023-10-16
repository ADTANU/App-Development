package com.astrasquad.blog.DTO;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BlogResponse {

	private Long blogid;
    private String title;
    private Date date;
    private String author;
    private String content;
}
