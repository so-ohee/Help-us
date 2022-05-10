package com.ssafy.helpus.volunteer.repository;

import com.ssafy.helpus.volunteer.entity.VolunteerComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VolunteerCommentRepository extends JpaRepository<VolunteerComment, Long> {

    Optional<VolunteerComment> findByParentCommentId(Long parentCommentId);

    List<VolunteerComment> findByVolunteerIdOrderByCommentGroupDesc(Long volunteerId);


}
