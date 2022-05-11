package com.ssafy.helpus.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@Table(name = "help_desk_comment")
public class HelpDeskComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "help_desk_comment_id")
    private int HelpDeskCommentId;

    @Column(name = "content")
    private String content;

    @Column(name = "create_date")
    private LocalDateTime createDate;

    @ManyToOne
    @JoinColumn(name = "member_id")
    @JsonBackReference(value = "comment-member")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "help_desk_id")
    @JsonBackReference(value = "comment-desk")
    private HelpDesk helpDesk;
}
