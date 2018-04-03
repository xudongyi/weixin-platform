package com.business.system.action;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author: xudy
 * @date: 2018/04/03 14:24
 * @description:
 */
@RestController
@RequestMapping("test")
public class TestAction {
    @RequestMapping("/test.do")
    public String test(){
        return "success";
    }
}