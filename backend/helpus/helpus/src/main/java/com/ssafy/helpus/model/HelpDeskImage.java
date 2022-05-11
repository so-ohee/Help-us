package com.ssafy.helpus.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@Table(name = "help_desk_image")
public class HelpDeskImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "help_desk_image_id")
    private int HelpDeskCommentId;

    @Column(name = "content")
    private String content;

    @Column(name = "create_date")
    private LocalDateTime createDate;

    @ManyToOne
    @JoinColumn(name = "member_id")
    @JsonBackReference(value = "image-member")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "help_desk_id")
    @JsonBackReference(value = "image-desk")
    private HelpDesk helpDesk;
}