package com.ssafy.helpus.volunteer.service.Impl;

import com.ssafy.helpus.volunteer.dto.TalentDonationReqDto;
import com.ssafy.helpus.volunteer.dto.TalentDonationResDto;
import com.ssafy.helpus.volunteer.dto.TalentDonationUpdateReqDto;
import com.ssafy.helpus.volunteer.entity.Volunteer;
import com.ssafy.helpus.volunteer.repository.VolunteerRepository;
import com.ssafy.helpus.volunteer.service.FileService;
import com.ssafy.helpus.volunteer.service.TalentDonationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class TalentDonationServiceImpl implements TalentDonationService {

    private final VolunteerRepository volunteerRepository;
    private final FileService fileService;

    @Override
    public Map<String, Object> registerTalentDonation(TalentDonationReqDto talentDonationReqDto, Long memberId, MultipartFile[] files, String role) throws Exception {
        log.info("TalentDonationService registerTalentDonation call");

        Map<String, Object> resultMap = new HashMap<>();

        if(files != null && !fileService.fileExtensionCheck(files)) {
            resultMap.put("message", "파일확장자 불량");
            return resultMap;
        }

        Volunteer volunteer = Volunteer.builder()
                .memberId(memberId)
                .title(talentDonationReqDto.getTitle())
                .content(talentDonationReqDto.getContent())
                .category(role)
                .build();
        volunteerRepository.save(volunteer);

        if(files != null){
            fileService.volunteerFileSave(volunteer, files);
        }

        resultMap.put("message", "성공");
        resultMap.put("volunteerId", volunteer.getVolunteer_id());

        return resultMap;
    }

    @Override
    @Transactional
    public Map<String, Object> updateTalentDonation(TalentDonationUpdateReqDto talentDonationUpdateReqDto, Long memberId, MultipartFile[] files, String role) throws Exception {
        log.info("TalentDonationService updateTalentDonation call");

        Map<String, Object> resultMap = new HashMap<>();

        if(files != null && !fileService.fileExtensionCheck(files)) {
            resultMap.put("message", "파일확장자 불량");
            return resultMap;
        }

        Optional<Volunteer> volunteer = volunteerRepository.findById(talentDonationUpdateReqDto.getVolunteerId());

        volunteer.get().setTitle(talentDonationUpdateReqDto.getTitle());
        volunteer.get().setContent(talentDonationUpdateReqDto.getContent());
        volunteer.get().setUpdateDate(LocalDateTime.now());

        if(files == null){
            fileService.volunteerFileDelete(volunteer.get().getImages());
        }
        else{
            fileService.volunteerFileDelete(volunteer.get().getImages());
            fileService.volunteerFileSave(volunteer.get(), files);
        }

        resultMap.put("message", "게시물 수정 성공");
        return resultMap;
    }

    @Override
    @Transactional
    public Map<String, Object> getTalentDonation(Long volunteerId) throws Exception {
        log.info("TalentDonationService getTalentDonation call");

        Map<String, Object> resultMap = new HashMap<>();

        Optional<Volunteer> volunteer = volunteerRepository.findById(volunteerId);
        if(!volunteer.isPresent()){
            resultMap.put("message", "게시물 없음");
            return resultMap;
        }

        TalentDonationResDto talentDonationResDto = TalentDonationResDto.builder()
                .memberId(volunteer.get().getMemberId())
                .title(volunteer.get().getTitle())
                .content(volunteer.get().getContent())
                .createDate(volunteer.get().getCreateDate())
                .updateDate(volunteer.get().getUpdateDate())
                .images(fileService.getVolunteerFileList(volunteer.get().getImages())).build();

        resultMap.put("message", "조회 성공");
        resultMap.put("volunteer", talentDonationResDto);
        return resultMap;
    }

    @Override
    @Transactional
    public Map<String, Object> deleteTalentDonation(Long volunteerId) throws Exception {
        log.info("TalentDonationService deleteTalentDonation call");

        Map<String, Object> resultMap = new HashMap<>();

        Optional<Volunteer> volunteer = volunteerRepository.findById(volunteerId);
        if(!volunteer.isPresent()){
            resultMap.put("message", "해당게시물은 없습니다");
            return resultMap;
        }
        volunteerRepository.deleteById(volunteerId);

        resultMap.put("message", "삭제성공");
        return resultMap;
    }

}
