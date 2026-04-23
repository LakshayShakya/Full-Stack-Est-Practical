package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {
    
    @Query("SELECT j FROM Job j WHERE " +
           "(:role IS NULL OR j.title LIKE %:role%) AND " +
           "(:location IS NULL OR j.location = :location) AND " +
           "(:type IS NULL OR j.jobType = :type) AND " +
           "(:experience IS NULL OR j.expeience = :experience)")
    List<Job> findByFilters(
            @Param("role") String role,
            @Param("location") String location,
            @Param("type") String type,
            @Param("experience") String experience);
}
