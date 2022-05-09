package com.ssafy.helpus.volunteer.service;

import com.ssafy.helpus.volunteer.dto.TalentDonationUpdateReqDto;
import com.ssafy.helpus.volunteer.dto.TalentDonationReqDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

public interface TalentDonationService {
    // 재능기부 등록
    Map<String, Object> registerTalentDonation(TalentDonationReqDto talentDonationReqDto, Long memberId, MultipartFile[] files, String role) throws Exception;
    // 재능기부 수정
    Map<String, Object> updateTalentDonation(TalentDonationUpdateReqDto talentDonationUpdateReqDto, Long memberId, MultipartFile[] files, String role) throws Exception;
    // 재능기부 글 조회
    Map<String, Object> getTalentDonation(Long volunteerId) throws Exception;
    // 재능기부 글 삭제
    Map<String, Object> deleteTalentDonation(Long volunteerId) throws Exception;
}
