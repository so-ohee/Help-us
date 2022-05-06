package com.ssafy.helpus.donation.repository;

import com.ssafy.helpus.donation.entity.Donation;
import com.ssafy.helpus.donation.entity.DonationApply;
import com.ssafy.helpus.donation.enumClass.ApplyStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonationApplyRepository extends JpaRepository<DonationApply, Long> {
    Page<DonationApply> findByMemberIdAndStatusNot(Long memberId, ApplyStatus status, Pageable pageable);

    Page<DonationApply> findByStatusAndDonationIn(ApplyStatus 배송중, List<Donation> donations, Pageable pageable);

    Page<DonationApply> findByStatusAndDonation(ApplyStatus 배송중, Donation donation, Pageable pageable);
}
