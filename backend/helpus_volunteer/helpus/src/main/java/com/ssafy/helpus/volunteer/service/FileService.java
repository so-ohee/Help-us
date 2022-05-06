package com.ssafy.helpus.volunteer.service;

import com.ssafy.helpus.volunteer.entity.Volunteer;
import com.ssafy.helpus.volunteer.entity.VolunteerImage;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FileService {

    boolean fileExtensionCheck(List<MultipartFile> files) throws Exception;

    void volunteerFileSave(Volunteer volunteer, List<MultipartFile> files) throws Exception;

    void volunteerFileDelete(List<VolunteerImage> files) throws Exception;

    List<String> getVolunteerFileList(List<VolunteerImage> files) throws Exception;

}
