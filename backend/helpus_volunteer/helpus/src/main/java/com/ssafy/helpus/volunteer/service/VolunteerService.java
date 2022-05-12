package com.ssafy.helpus.volunteer.service;

import com.ssafy.helpus.volunteer.dto.VolunteerReqDto;
import com.ssafy.helpus.volunteer.dto.VolunteerUpdateReqDto;
import com.ssafy.helpus.volunteer.entity.Volunteer;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

public interface VolunteerService {

    // 봉사 등록
    Map<String, Object> registerVoluneer(VolunteerReqDto volunteerReqDto, Long memberId, MultipartFile[] files, String role) throws Exception;
    // 봉사 수정
    Map<String, Object> updateVolunteer(VolunteerUpdateReqDto volunteerUpdateReqDto, Long memberId, MultipartFile[] files, String role) throws Exception;
    // 봉사 글 조회
    Map<String, Object> getVoluneer(Long volunteerId) throws Exception;
    // 재능기부 글 삭제
    Map<String, Object> deleteVolunteer(Long volunteerId) throws Exception;
    // 봉사 글 마감
    Map<String, Object> endVolunteer(Long volunteerId) throws Exception;
    // 봉사 신청
    Map<String, Object> applyVolunteer(Long volunteerId, Long memberId, String role) throws Exception;
    // 봉사글 목록
    Map<String, Object> listVolunteer (String category, int page) throws Exception;
    // 목록 만들기
    Map<String, Object> makeListVolunteer (Page<Volunteer> volunteers) throws Exception;
    // 봉사 글 목록 - 메인
    Map<String, Object> mainListVolunteer(String order, int page) throws Exception;

    Map<String, String> getVolunteer(Long volunteerId);

}
