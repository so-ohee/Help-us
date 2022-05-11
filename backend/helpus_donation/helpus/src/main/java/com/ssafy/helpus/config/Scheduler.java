package com.ssafy.helpus.config;

import com.ssafy.helpus.donation.entity.Donation;
import com.ssafy.helpus.donation.enumClass.DonationStatus;
import com.ssafy.helpus.donation.repository.DonationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class Scheduler {

    private final DonationRepository donationRepository;

    @Scheduled(cron = "0 0 0 * * *", zone = "Asia/Seoul")
    @Transactional
    public void donationStatus() {
        log.info("Scheduler donationStatus call");

        List<Donation> list = donationRepository.findByEndDateBeforeAndStatus(LocalDate.now(), DonationStatus.진행);
        for(Donation donation : list) {
            donation.setStatus(DonationStatus.마감);
        }
    }
}
