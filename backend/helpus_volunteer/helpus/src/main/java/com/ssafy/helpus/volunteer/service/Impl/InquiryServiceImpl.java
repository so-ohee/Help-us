package com.ssafy.helpus.volunteer.service.Impl;

import com.ssafy.helpus.volunteer.dto.ListApplyResDto;
import com.ssafy.helpus.volunteer.dto.ListVolunteerResDto;
import com.ssafy.helpus.volunteer.entity.Volunteer;
import com.ssafy.helpus.volunteer.entity.VolunteerApply;
import com.ssafy.helpus.volunteer.enumClass.VolunteerOrder;
import com.ssafy.helpus.volunteer.repository.VolunteerApplyRepository;
import com.ssafy.helpus.volunteer.repository.VolunteerRepository;
import com.ssafy.helpus.volunteer.service.InquiryService;
import com.ssafy.helpus.volunteer.service.MemberService;
import com.ssafy.helpus.volunteer.service.VolunteerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class InquiryServiceImpl implements InquiryService {

    private final VolunteerRepository volunteerRepository;
    private final VolunteerApplyRepository volunteerApplyRepository;
    private final MemberService memberService;
    private final VolunteerService volunteerService;


    @Override
    public Map<String, Object> listOrg(Long memberId,String order, int page) throws Exception {
        log.info("InquiryService listOrg call");

        Sort sort = gerOrder(order);
        Page<Volunteer> volunteers = volunteerRepository.findByMemberId(memberId, PageRequest.of(page,6,sort));
        return makeListOrg(volunteers);

    }

    @Override
    public Map<String, Object> makeListOrg(Page<Volunteer> volunteers) throws Exception {
        log.info("InquiryService makeListOrg call");

        Map<String, Object> resultMap = new HashMap<>();

        if (volunteers.isEmpty()) {
            resultMap.put("message", "게시물없음");
            return resultMap;
        }
        List<ListVolunteerResDto> list = new ArrayList<>();

        for (Volunteer volunteer : volunteers) {

            Map<String, String> member = memberService.getMember(volunteer.getMemberId());

            ListVolunteerResDto listVolunteerResDto = ListVolunteerResDto.builder()
                    .volunteerId(volunteer.getVolunteerId())
                    .title(volunteer.getTitle())
                    .content(volunteer.getContent())
                    .applicant(volunteer.getApplicant())
                    .people(volunteer.getPeople())
                    .percent(volunteer.getPercent())
                    .volDate(volunteer.getVolDate())
                    .volAddress(volunteer.getVolAddress())
                    .volZipcode(volunteer.getVolZipcode())
                    .name(member.get("name"))
                    .profile(member.get("profile"))
                    .createDate(volunteer.getCreateDate()).build();
            list.add(listVolunteerResDto);
        }
        resultMap.put("listVolunteer", list);
        resultMap.put("totalPage", volunteers.getTotalPages());
        resultMap.put("message", "성공");
        return resultMap;
    }

    @Override
    public Map<String, Object> listApply(Long memberId, String order, int page) throws Exception {
        log.info("InquiryService listApply call");

        Sort sort = gerOrder(order);
        Page<VolunteerApply> volunteerApplies = volunteerApplyRepository.findByWriterId(memberId, PageRequest.of(page,6,sort));
        return makeListApply(volunteerApplies);
    }

    @Override
    public Map<String, Object> makeListApply(Page<VolunteerApply> volunteerApplies) throws Exception {
        log.info("InquiryService makeListApply call");

        Map<String, Object> resultMap = new HashMap<>();

        if (volunteerApplies.isEmpty()) {
            resultMap.put("message", "지원자 없음");
            return resultMap;
        }

        List<ListApplyResDto> list = new ArrayList<>();

        for (VolunteerApply volunteerApply : volunteerApplies) {

            Map<String, String> member = memberService.getMember(volunteerApply.getMemberId());
            //Map<String, String> volunteer = volunteerService.getVolunteer(volunteerApply.getVolunteer());

            ListApplyResDto listApplyResDto = ListApplyResDto.builder()
                    .name(member.get("name"))
                    .profile(member.get("profile"))
                    .build();
            list.add(listApplyResDto);
        }
        resultMap.put("listApply", list);
        resultMap.put("totalPage", volunteerApplies.getTotalPages());
        resultMap.put("message", "성공");
        return resultMap;


    }


    public Sort gerOrder(String order) {
        //정렬(최신, 달성률 높은, 달성률 낮은, 오래된)
        if(order.equals(VolunteerOrder.최신순.toString())) { return Sort.by("volunteerId").descending(); }
        else if(order.equals(VolunteerOrder.오래된순.toString())) { return Sort.by("volunteerId").ascending(); }
        else if(order.equals(VolunteerOrder.높은순.toString())) { return Sort.by("percent").descending(); }
        else { return Sort.by("percent").ascending(); }
    }

}
