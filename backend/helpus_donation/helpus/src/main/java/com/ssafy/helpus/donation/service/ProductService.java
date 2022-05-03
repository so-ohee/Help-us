package com.ssafy.helpus.donation.service;

import com.ssafy.helpus.donation.dto.Apply.ApplyReqDto;
import com.ssafy.helpus.donation.dto.Donation.DonationListProductResDto;
import com.ssafy.helpus.donation.dto.Donation.DonationProductResDto;
import com.ssafy.helpus.donation.entity.DonationProduct;

import java.util.List;

public interface ProductService {

    //기부 글 물품 조회
    List<DonationProductResDto> getDonationProduct(List<DonationProduct> donationProducts);
    //기부 목록 물품 조회
    List<DonationListProductResDto> getDonationListProduct(List<DonationProduct> donationProducts);

    //기부 물품 배송중 수량 변경
    DonationProduct addApplyProduct(ApplyReqDto applyDto) throws Exception;
}
