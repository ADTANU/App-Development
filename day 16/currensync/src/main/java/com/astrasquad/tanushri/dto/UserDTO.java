package com.astrasquad.tanushri.dto;

public class UserDTO {
    private Integer orgID;
    public UserDTO(Integer orgID, String address, String phone, String email, String username, String password) {
		super();
		this.orgID = orgID;
		this.address = address;
		this.phone = phone;
		this.email = email;
		this.username = username;
		this.password = password;
	}

	public Integer getOrgID() {
		return orgID;
	}

	public void setOrgID(Integer orgID) {
		this.orgID = orgID;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	private String address;
    private String phone;
    private String email;
    private String username;
    private String password;
    // Other relevant fields

    // Constructors, getters, setters, etc.

    // Default constructor
    public UserDTO() {
    }

    // Parameterized constructor
    
}

