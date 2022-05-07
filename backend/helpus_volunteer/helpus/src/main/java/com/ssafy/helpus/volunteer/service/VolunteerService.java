package com.ssafy.helpus.volunteer.service;

import com.ssafy.helpus.volunteer.dto.VolunteerReqDto;
import com.ssafy.helpus.volunteer.dto.VolunteerUpdateReqDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

public interface VolunteerService {

    // 봉사 등록
    Map<String, Object> registerVoluneer(VolunteerReqDto volunteerReqDto, Long memberId, List<MultipartFile> files, String role) throws Exception;
    // 봉사 수정
    Map<String, Object> updateVoluneer(VolunteerUpdateReqDto volunteerUpdateReqDto, List<MultipartFile> files) throws Exception;
    // 봉사 글 조회
    Map<String, Object> getVoluneer(Long volunteerId) throws Exception;

}
