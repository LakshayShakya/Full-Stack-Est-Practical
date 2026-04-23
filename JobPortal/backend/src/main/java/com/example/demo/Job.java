package com.example.demo;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "jobs")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String postedOn;
    private String title;
    private String company;
    private String jobType;
    private String expeience; // Keeping the typo as requested
    private String location;
    
    @ElementCollection
    @CollectionTable(name = "job_skills", joinColumns = @JoinColumn(name = "job_id"))
    @Column(name = "skill")
    private List<String> skill;
    
    private String jobLink;

    public Job() {}

    public Job(Long id, String postedOn, String title, String company, String jobType, String expeience, String location, List<String> skill, String jobLink) {
        this.id = id;
        this.postedOn = postedOn;
        this.title = title;
        this.company = company;
        this.jobType = jobType;
        this.expeience = expeience;
        this.location = location;
        this.skill = skill;
        this.jobLink = jobLink;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getPostedOn() { return postedOn; }
    public void setPostedOn(String postedOn) { this.postedOn = postedOn; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }
    public String getJobType() { return jobType; }
    public void setJobType(String jobType) { this.jobType = jobType; }
    public String getExpeience() { return expeience; }
    public void setExpeience(String expeience) { this.expeience = expeience; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public List<String> getSkill() { return skill; }
    public void setSkill(List<String> skill) { this.skill = skill; }
    public String getJobLink() { return jobLink; }
    public void setJobLink(String jobLink) { this.jobLink = jobLink; }
}
