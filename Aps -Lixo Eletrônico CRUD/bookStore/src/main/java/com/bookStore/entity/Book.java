package com.bookStore.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
public class Book {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@NotBlank(message = "Informe o tipo de residuo.")
	@Size(max = 100, message = "Use no maximo 100 caracteres.")
	private String name;
	@Pattern(regexp = "[1-9][0-9]{0,5}", message = "Informe uma quantidade inteira entre 1 e 999999.")
	@NotBlank(message = "Informe a quantidade.")
	private String author;
	@NotBlank(message = "Informe o peso unitario.")
	@Pattern(regexp = "(?:0|[1-9][0-9]{0,6})(?:\\.[0-9]{1,2})?", message = "Informe o peso com ate duas casas decimais.")
	@DecimalMin(value = "0.01", message = "O peso deve ser maior que zero.")
	@DecimalMax(value = "9999999.99", message = "O peso ultrapassa o limite permitido.")
	private String price;
	public Book(int id, String name, String author, String price) {
		super();
		this.id = id;
		this.name = name;
		this.author = author;
		this.price = price;
	}
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	
}
