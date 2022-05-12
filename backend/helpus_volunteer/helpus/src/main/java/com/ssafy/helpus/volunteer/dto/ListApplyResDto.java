package com.ssafy.helpus.volunteer.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;

import javax.persistence.Column;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Builder
@ApiModel(value = "봉사자들 목록")
public class ListApplyResDto {

    @ApiModelProperty(value = "제목")
    @Column(name = "volunteer_apply_id")
    private Long volunteerApplyId;

    @ApiModelProperty(value = "제목")
    private String title;

    @ApiModelProperty(value = "작성일")
    @Column(name = "vol_date")
    private LocalDate volDate;

    @ApiModelProperty(value = "프로필 사진")
    private String profile;

    @ApiModelProperty(value = "기관명")
    private String name;

    @ApiModelProperty(value = "참석여부")
    private String status;

}
