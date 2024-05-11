package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.CaixiDao;
import com.entity.CaixiEntity;
import com.service.CaixiService;
import com.entity.vo.CaixiVO;
import com.entity.view.CaixiView;

@Service("caixiService")
public class CaixiServiceImpl extends ServiceImpl<CaixiDao, CaixiEntity> implements CaixiService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<CaixiEntity> page = this.selectPage(
                new Query<CaixiEntity>(params).getPage(),
                new EntityWrapper<CaixiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<CaixiEntity> wrapper) {
		  Page<CaixiView> page =new Query<CaixiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<CaixiVO> selectListVO(Wrapper<CaixiEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public CaixiVO selectVO(Wrapper<CaixiEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<CaixiView> selectListView(Wrapper<CaixiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public CaixiView selectView(Wrapper<CaixiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
