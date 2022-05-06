package com.ssafy.helpus.volunteer.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "volunteer")
public class Volunteer {
    @Id @Column(name = "volunteer_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long volunteer_id;

    @Column(name = "member_id", nullable = false, updatable = false)
    private Long memberId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private String content;

    @Column(name = "vol_zipcode", nullable = true)
    private int volZipcode;

    @Column(name = "vol_address", nullable = true)
    private String volAddress;

    @Column(nullable = true)
    private int people;

    @Column(nullable = true)
    private int applicant;

    @Column(name = "vol_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm")
    private LocalDate volDate;

    @Column(name = "create_date", insertable = false, updatable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm")
    private LocalDateTime createDate;

    @Column(name = "update_date", insertable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm")
    private LocalDateTime updateDate;

    @Builder
    public Volunteer(Long memberId, String title, String content, int volZipcode, String volAddress, int people, int applicant, LocalDate volDate, String category){
        this.memberId = memberId;
        this.title = title;
        this.content = content;
        this.volZipcode = volZipcode;
        this.volAddress = volAddress;
        this.people = people;
        this.applicant = applicant;
        this.volDate = volDate;
        this.category = category;

    }


}
