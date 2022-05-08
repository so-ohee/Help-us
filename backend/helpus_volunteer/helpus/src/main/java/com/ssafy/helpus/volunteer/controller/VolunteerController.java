package com.ssafy.helpus.volunteer.controller;

import com.ssafy.helpus.volunteer.dto.VolunteerReqDto;
import com.ssafy.helpus.volunteer.dto.VolunteerUpdateReqDto;
import com.ssafy.helpus.volunteer.service.FileService;
import com.ssafy.helpus.volunteer.service.VolunteerService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.logging.log4j.message.Message;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/volunteer")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class VolunteerController {

    private final VolunteerService volunteerService;
    private final FileService fileService;


    @ApiOperation(value = "봉사 글 등록")
    @PostMapping
    public ResponseEntity registerVolunteer(@RequestPart VolunteerReqDto volunteerReqDto, @RequestPart List<MultipartFile> files,
                                            @RequestHeader HttpHeaders headers){
        log.info("VolunteerController registerVolunteer call");

        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = HttpStatus.CREATED;
        try {
            if(!fileService.fileExtensionCheck(files)){
                resultMap.put("message", "파일확장자 x");
                status = HttpStatus.BAD_REQUEST;
            }else {
                Long memberId = Long.valueOf(headers.get("memberId").get(0));
                String role = headers.get("role").get(0);
                resultMap = volunteerService.registerVoluneer(volunteerReqDto, memberId, files, role);
            }
        } catch (Exception e){
            log.error(e.getMessage());
            resultMap.put("message", "에러에러");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity(resultMap, status);
    }

    @ApiOperation(value = "봉사 글 수정")
    @PutMapping
    public ResponseEntity updateVolunteer(@RequestPart VolunteerUpdateReqDto volunteerUpdateReqDto, @RequestPart List<MultipartFile> files,
                                          @RequestHeader HttpHeaders headers){
        log.info("VolunteerController registerVolunteer call");

        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = HttpStatus.CREATED;
        try {
            if(!fileService.fileExtensionCheck(files)){
                resultMap.put("message", "파일확장자 x");
                status = HttpStatus.BAD_REQUEST;
            }else {
                Long memberId = Long.valueOf(headers.get("memberId").get(0));
                String role = headers.get("role").get(0);
                resultMap = volunteerService.updateVolunteer(volunteerUpdateReqDto, memberId, files, role);
            }
        } catch (Exception e){
            log.error(e.getMessage());
            resultMap.put("message", "에러에러");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity(resultMap, status);
    }

    @ApiOperation(value = "봉사 글 조회")
    @GetMapping("{volunteerId}")
    public ResponseEntity getVolunteer(@PathVariable Long volunteerId){
        log.info("VolunteerController getVolunteer call");

        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = HttpStatus.OK;
        try {
            resultMap = volunteerService.getVoluneer(volunteerId);
        } catch (Exception e){
            log.error(e.getMessage());
            resultMap.put("message", "error");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity(resultMap, status);
    }

}
