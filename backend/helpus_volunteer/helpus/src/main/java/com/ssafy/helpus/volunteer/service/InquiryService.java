package com.ssafy.helpus.volunteer.service;

import com.ssafy.helpus.volunteer.entity.Volunteer;
import org.springframework.data.domain.Page;

import java.util.Map;

public interface InquiryService {
    // 내가(기업) 올린 봉사글 목록
    Map<String, Object> listOrg (Long memberId,String order, int page) throws Exception;
    // 목록 만들기
    Map<String, Object> makeListOrg (Page<Volunteer> volunteers) throws Exception;
}
