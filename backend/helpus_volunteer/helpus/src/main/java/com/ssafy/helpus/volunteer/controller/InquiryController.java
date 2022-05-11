package com.ssafy.helpus.volunteer.controller;

import com.ssafy.helpus.volunteer.service.InquiryService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/inquiry")
@CrossOrigin(origins = {"*"}, maxAge = 6000)
public class InquiryController {

    private final InquiryService inquiryService;

    @ApiOperation(value = "기업 등록 글 목록")
    @GetMapping("org/{memberId}")
    public ResponseEntity getOrgVolunteer(@PathVariable Long memberId, @RequestParam(required = false, defaultValue = "최신순") String order,
                                          @RequestParam(required = false, defaultValue = "1") int page){

        String category = "ORG";
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = HttpStatus.OK;
        try {
            resultMap = inquiryService.listOrg(memberId,order, page-1);
        }catch (Exception e){
            log.error(e.getMessage());

            resultMap.put("message", e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity(resultMap, status);
    }

}
