package com.ssafy.helpus.volunteer.repository;

import com.ssafy.helpus.volunteer.entity.Volunteer;
import com.ssafy.helpus.volunteer.entity.VolunteerApply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VolunteerApplyRepository extends JpaRepository <VolunteerApply, Long>{
     List<VolunteerApply> findByVolunteer(Volunteer volunteer);
}
