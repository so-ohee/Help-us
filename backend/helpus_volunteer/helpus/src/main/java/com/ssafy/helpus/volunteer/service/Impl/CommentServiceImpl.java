package com.ssafy.helpus.volunteer.service.Impl;

import com.ssafy.helpus.volunteer.dto.CommentReqDto;
import com.ssafy.helpus.volunteer.entity.VolunteerComment;
import com.ssafy.helpus.volunteer.repository.VolunteerCommentRepository;
import com.ssafy.helpus.volunteer.service.CommentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {

    private final VolunteerCommentRepository volunteerCommentRepository;

    @Override
    public Map<String, Object> registerComment(CommentReqDto commentReqDto, Long memberId) throws Exception {
        log.info("CommentService registerComment call");

        Map<String, Object> resultMap = new HashMap<>();

        Long volunteerId = commentReqDto.getVolunteerId();
        Long parentCommentId = commentReqDto.getParentCommentId();

        int commentGroup = 0;
        int depth = 0;

        if(parentCommentId != null){
            Optional<VolunteerComment> op_volunteerComment = volunteerCommentRepository.findById(parentCommentId);
            commentGroup = op_volunteerComment.get().getCommentGroup();
            depth = op_volunteerComment.get().getDepth()+1;

            VolunteerComment volunteerComment = VolunteerComment.builder()
                    .memberId(memberId)
                    .parentCommentId(parentCommentId)
                    .content(commentReqDto.getContent())
                    .volunteerId(volunteerId)
                    .commentGroup(commentGroup)
                    .depth(depth)
                    .build();
            volunteerCommentRepository.save(volunteerComment);

            resultMap.put("message", "대댓글작성 성공");
            return resultMap;
        }
        else{
            List<VolunteerComment> comments = volunteerCommentRepository.findByVolunteerIdOrderByCommentGroupDesc(volunteerId);
            if(!comments.isEmpty()){
                commentGroup = comments.get(0).getCommentGroup();
            }
            commentGroup++;
            log.info("group은 현재 : ");
            System.out.println(commentGroup);
            VolunteerComment volunteerComment = VolunteerComment.builder()
                    .memberId(memberId)
                    .content(commentReqDto.getContent())
                    .volunteerId(volunteerId)
                    .commentGroup(commentGroup)
                    .depth(depth)
                    .build();
            volunteerCommentRepository.save(volunteerComment);

            resultMap.put("message", "댓글 작성 성공");
            return resultMap;
        }
    }

    @Override
    public Map<String, Object> listComment(Long volunteerId, int page) throws Exception {
        return null;
    }

    @Override
    public Map<String, Object> deleteComment(Long volunteerCommentId) throws Exception {
        return null;
    }
}
