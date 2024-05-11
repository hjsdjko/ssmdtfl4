package com.dao;

import com.entity.CaixiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.CaixiVO;
import com.entity.view.CaixiView;


/**
 * 菜系
 * 
 * @author 
 * @email 
 * @date 2021-04-20 23:47:46
 */
public interface CaixiDao extends BaseMapper<CaixiEntity> {
	
	List<CaixiVO> selectListVO(@Param("ew") Wrapper<CaixiEntity> wrapper);
	
	CaixiVO selectVO(@Param("ew") Wrapper<CaixiEntity> wrapper);
	
	List<CaixiView> selectListView(@Param("ew") Wrapper<CaixiEntity> wrapper);

	List<CaixiView> selectListView(Pagination page,@Param("ew") Wrapper<CaixiEntity> wrapper);
	
	CaixiView selectView(@Param("ew") Wrapper<CaixiEntity> wrapper);
	
}
