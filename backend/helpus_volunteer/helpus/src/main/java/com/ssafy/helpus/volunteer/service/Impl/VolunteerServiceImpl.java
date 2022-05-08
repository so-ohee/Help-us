package com.ssafy.helpus.volunteer.service.Impl;

import com.ssafy.helpus.volunteer.dto.VolunteerReqDto;
import com.ssafy.helpus.volunteer.dto.VolunteerResDto;
import com.ssafy.helpus.volunteer.dto.VolunteerUpdateReqDto;
import com.ssafy.helpus.volunteer.entity.Volunteer;
import com.ssafy.helpus.volunteer.repository.VolunteerRepository;
import com.ssafy.helpus.volunteer.service.FileService;
import com.ssafy.helpus.volunteer.service.VolunteerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class VolunteerServiceImpl implements VolunteerService{

    private final VolunteerRepository volunteerRepository;
    private final FileService fileService;



    @Override
    public Map<String, Object> registerVoluneer(VolunteerReqDto volunteerReqDto, Long memberId, List<MultipartFile> files, String role) throws Exception {
        log.info("VolunteerService registerVolunteer call");

        Map<String, Object> resultMap = new HashMap<>();

        Volunteer volunteer = Volunteer.builder()
                .memberId(memberId)
                .title(volunteerReqDto.getTitle())
                .content(volunteerReqDto.getContent())
                .volZipcode(volunteerReqDto.getVolZipcode())
                .volAddress(volunteerReqDto.getVolAddress())
                .people(volunteerReqDto.getPeople())
                .applicant(0)
                .volDate(volunteerReqDto.getVolDate())
                .category(role)
                .build();
        volunteerRepository.save(volunteer);


        fileService.volunteerFileSave(volunteer, files);

        resultMap.put("message", "성공");
        resultMap.put("volunteerId", volunteer.getVolunteer_id());

        return resultMap;

    }

    @Override
    public Map<String, Object> updateVolunteer(VolunteerUpdateReqDto volunteerUpdateReqDto, Long memberId, List<MultipartFile> files, String role) throws Exception {
        return null;
    }

    @Override
    @Transactional
    public Map<String, Object> getVoluneer(Long volunteerId) throws Exception {
        log.info("VolunteerService getVolunteer call");

        Map<String, Object> resultMap = new HashMap<>();

        Optional<Volunteer> volunteer = volunteerRepository.findById(volunteerId);
        if(!volunteer.isPresent()){
            resultMap.put("message", "없음");
            return resultMap;
        }

        VolunteerResDto volunteerResDto = VolunteerResDto.builder()
                .memberId(volunteer.get().getMemberId())
                .title(volunteer.get().getTitle())
                .content(volunteer.get().getContent())
                .createDate(volunteer.get().getCreateDate())
                .updateDate(volunteer.get().getUpdateDate())
                .volDate(volunteer.get().getVolDate())
                .volAddress(volunteer.get().getVolAddress())
                .volZipcode(volunteer.get().getVolZipcode())
                .applicant(volunteer.get().getApplicant())
                .people(volunteer.get().getPeople())
                .percent(volunteer.get().getPercent())
                .images(fileService.getVolunteerFileList(volunteer.get().getImages())).build();

        resultMap.put("message", "조회 성공");
        resultMap.put("volunteer", volunteerResDto);
        return resultMap;
    }

}
