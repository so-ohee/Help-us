package com.ssafy.helpus.donation.dto.Apply;

import com.ssafy.helpus.donation.enumClass.ApplyStatus;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;

@ApiModel(value = "기부 목록")
@Getter
public class ApplyListResDto {

    private Long donationApplyId;

    private Long donationId;

    private Long memberId;

    private String name;

    private String title;

    @ApiModelProperty(value = "택배사")
    private String parcel;

    @ApiModelProperty(value = "송장 번호")
    private Integer invoice;

    private String productName;

    private int count;

    private LocalDate donationDate;

    private ApplyStatus status;

    @Builder
    public ApplyListResDto(Long donationApplyId, Long donationId, Long memberId, String name, String title,
                           String parcel, Integer invoice, String productName, int count, LocalDate donationDate, ApplyStatus status) {
        this.donationApplyId = donationApplyId;
        this.donationId = donationId;
        this.memberId = memberId;
        this.name = name;
        this.title = title;
        this.parcel = parcel;
        this.invoice = invoice;
        this.productName = productName;
        this.count = count;
        this.donationDate = donationDate;
        this.status = status;
    }
}
