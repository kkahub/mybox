$(function(){
	/* GNB 메뉴 */
		GnbUI._initEvent('.burger','#nav');

	/* 셀렉트 박스 :  new SelectBox('셀렉트박스','선택옵션띄울엘레먼트') */
		var yearSelect = new SelectBox('.delivery_year','.delivery_date .year label');
		var monthSelect = new SelectBox('.delivery_month','.delivery_date .month label');
		var weekSelect = new SelectBox('.delivery_week','.delivery_date .week label');

	/* 견적요청 팝업 : new Popup('클릭요소','팝업','닫기요소');*/
		var estimateApply = new Popup('.btn.box_order','.pop_wrap','.btn.ok');

	/* 견적요청 완료 팝업 */
		var photoSelect = new Popup('.btn_camera','.pop_wrap.camera','.btn, .btn_gray');
		var nomemberEstimate = new Popup('.btn.nomember_estimate','.pop_wrap.fin_btn','.btn.ok');

	/* 카운터 */
		$('.arrow_up').on('click', function(){
			var count = Number($(this).siblings('.count').text());
			++count;

			$(this).siblings('.count').text(count);
		});
		$('.step1_order .arrow_down').off().on('click', function(){
			var count = Number($(this).siblings('.count').text());

			if(count > 0) {
				count--;
				$(this).siblings('.count').text(count);
			}
		});
		$('.step4_order .arrow_down').off().on('click', function(){
			var count = Number($(this).siblings('.count').text());

			if(count > 1) {
				count--;
				$(this).siblings('.count').text(count);
			}
		});
		$('.right.counter .arrow_down').off().on('click', function(){
			var count = Number($(this).siblings('.count').text());

			if(count > 1) {
				count--;
				$(this).siblings('.count').text(count);
			}
		});
		$('.package .arrow_down').off().on('click', function(){
			var count = Number($(this).siblings('.count').text());

			if(count > 0) {
				count--;
				$(this).siblings('.count').text(count);
			}
		});

	/* 물음표 텝 */
		layerOver._initEvent();

	/* 메일 선택 */
		var mailSelect = new MailFormSel('.email_ipt1','.email_ipt2','#selMail');

    /* 일정선택 팝업 */
		var addressSearch = new Popup('.address_search','.address_pick','.btn.ok');
		var serviceArea = new Popup('.service','.service_area','.btn.ok');

		var whenVisit = new Popup('.when_visit','.date_pick','.btn.date_select');
		var whenVisitTime = new Popup('.visit_time','.time_pick','.btn.time_ok');
		var visitItem = new Popup('.visit_item','.date_pick','.btn.date_select');
		var visitItemTime = new Popup('.item_time','.time_pick','.btn.time_ok');

		var popFloor = new Popup('.elevator_no','.pop_floor','.btn.ok');

	/* 일정선택 버튼 선택 */
		var visitItemOption1 = new SelectBtn('.time_select');
		var visitItemOption2 = new SelectBtn('.time_selecter');
		var elevatorOption = new SelectBtn('.elevator');
		var timeOption = new SelectBtn('.pop_wrap .time_selecter');

	/* 주문확인 팝업 */
		var pickUpInfo = new Popup('.pickup_info','.pickup_price','.btn.ok');
		var nonCodePhoto = new Popup('.non_standard_box .camera_big','.camera','.btn.cancle');
		var dateAndTime1 = new Popup('.visit_memo','.date_tiem_pick','.btn.ok');
		var dateAndTime2 = new Popup('.pick_up_memo','.date_tiem_pick','.btn.ok');

	/* 주문확인 텝 UI : new TabMenu('메뉴네임','콘텐츠네임'); */
		var dateTimeTab = new TabMenu('.pop_wrap .date_time_menu','.pop_wrap .date_time_con');
		var datetimeOption = new SelectBtn('.date_time_con .time_select');

	/* 주문확인 아이템 삭제 */
		var orderDel = chkItemDel('.order .box_category>li .chk_style input[type="checkbox"]:checked');

	/* 수거하기 팝업 */
		var pickUpPhoto = new Popup('.camera_wrap','.camera','.btn.cancle');
		var pickUpMeno = new Popup('.item_info','.item_memo','.btn.ok');

	/* 창고 아이템 배송 팝업 */
		var paymentPop = new Popup('.btn.payment','.payment_fin','.btn.ok');
		$('.delivery_day .chk_style input').one('click', function(){
			var checkBool = false;

			if(!checkBool  == true){
				$('.same_delivery').css('display','table');
			}
		});

	/* 박스이력 아코디언 */
		var boxRecord = new Accordion('.box_record_list','.box_record_list .btn_accord');

	/* 결제내역 달력 팝업 */
		var periodStart = new Popup('.start_select','.start_pick','.btn.date_select');
		var periodEnd = new Popup('.end_select','.end_pick','.btn.date_select');

	/* 견적내역  */
		var estimateDel = chkItemDel('.estimate_record .box_category>li .chk_style input[type="checkbox"]:checked');

	/* FAQ 텝메뉴 */
		var faqTab = new TabMenu('.faq.tab_menu','.faq.tab_con');

	/* FAQ 아코디언 */
		var faqAccord = new Accordion('.board_list','.board_list dt');

	/* 비밀번호 찾기 */
		var pickUpPhoto = new Popup('.btn.pass_find','.pass_find_email','.btn.ok');

});

// GNB ///////////////////////////////////////////////////////
	var GnbUI = {
		$burger : null,
		$nav: null,
		$html: null,
		$header: null,

		_init: function(burder, nav){
			this.$burger = $(burder);
			this.$nav = $(nav);
			this.$html = $('html');
			this.$header = $('#header');
		},
		_initEvent: function(burder, nav){

			this._init(burder, nav);

			var objThis = this;

			this.$burger.on('click', function(){
				objThis.$nav.toggleClass('on');
				if(!objThis.$nav.hasClass('on')){
					objThis.$html.css({overflow:'auto'});
				} else {
					objThis.$html.css({overflow:'hidden'});
				}
			});
		}
	}

// 로더 ///////////////////////////////////////////////////////
function firstLoader(){
	$('.loader').fadeOut(1000, function(){
		$(this).remove();
	});
}

// 셀렉트박스 ///////////////////////////////////////////////
	function SelectBox(select,label){
		this.$selectBox = null;
		this.$selectItem = null;
		this.$labe = null;

		this._init(select,label);
		this._initEvent();
	}

	SelectBox.prototype._init = function(select,label){
		this.$selectBox = $(select);
		this.$label = $(label);
	}
	SelectBox.prototype._initEvent = function(){
		var objThis = this;

		this.$selectBox.on('change', function(){
			objThis.$selectItem = objThis.$selectBox.children('option:selected');
			var labelText = objThis.$selectItem.text();
			objThis.$label.text(labelText);
		});
	}

// 텝 UI ///////////////////////////////////////////////////////
	function TabMenu(menu,tabContent){
		this.tabMenu = null;
		this.tabMenuItem = null;
		this.selectMenuItem = null;
		this.tabContent = null;
		this.selectContent = null;

		this._init(menu,tabContent);
		this._initEvent();
	}

	TabMenu.prototype._init = function(menu,tabContent){
		this.$tabMenu = $(menu);
		this.$tabMenuItem = this.$tabMenu.children();
		this.$selectMenuItem = this.$tabMenuItem.find('.on');
		this.$tabContent = $(tabContent);
		this.$tabContentItem = this.$tabContent.children();
		this.$selectContent = this.$tabContent.children(this.selectIndex);
	}
	TabMenu.prototype._modifyClass = function(selector,callback){
		this.$tabMenuItem.removeClass('on');
		$(selector).addClass('on');

		callback(); // this._modifyContent() 콜백
	}
	TabMenu.prototype._modifyContent = function(index){
		this.$tabContentItem.hide();
		this.$tabContentItem.eq(index).show();
	}
	TabMenu.prototype._initEvent = function(){
		var objThis = this;

		this.$tabMenu.on('click','li',function(){
			var index = $(this).index();

			objThis._modifyClass(this,function(){
				objThis.$selectMenuItem;
				objThis.selectIndex;
				objThis._modifyContent(index);
			});
		});
	}

// 팝업 ////////////////////////////////////////////////////////
	function Popup(selector, pop, close){
		this.$selector = null;
		this.$pop = null;
		this.$close = null;

		this._init(selector, pop, close);
		this._initEvent();
	}

	Popup.prototype._init = function(selector, pop, close){
		this.$selector = $(selector);
		this.$pop = $(pop);
		this.$close = $(close);
	}
	Popup.prototype._popOpen = function(){
		var objThis = this;

		this.$selector.on('click', function(e){
			e.preventDefault();
			objThis.$pop.css({
				display:"table"
			});
		});
	}
	Popup.prototype._popClose = function(){
		var objThis = this;

		this.$close.on('click', function(){
			objThis.$pop.hide();
		});
	}
	Popup.prototype._initEvent = function(){
		this._popOpen();
		this._popClose();
	}

// 카운터 //////////////////////////////////////////////////////
	function Counter(counter, count, min){
		this.$arrowUp = null;
		this.$arrowDown = null;
		this.$counter = null;
		this.count = null;
		this.min = 0;

		this._init(counter, count, min);
		// this._initEvent();
	}

	Counter.prototype._init = function(counter, count, min){
		// this.$arrowUp = $(up);
		// this.$arrowDown = $(down);
		this.$counter = $(counter);
		this.count = count;
		this.min = min;
	}

// 물음표 텝 ///////////////////////////////////////////////////
	var layerOver = {
		$categoryInfo: null,
		$selectOverWrap: null,
		$overWrap: null,

		_init: function(){
			this.$categoryInfo = $('.category_info');
			this.$overWrap = $('.overwrap');
		},
		tabShow: function(){
			var objThis = this;

			this.$categoryInfo.on('click', function(){
				objThis.$selectOverWrap = $(this).siblings('.overwrap');
				$(this).parent().css("border","0");
				objThis.$selectOverWrap.css("border","1px solid #ddd").show();
			});
		},
		tabHide: function(){
			this.$overWrap.on('click', function(){
				$(this).parent().css("border","1px solid #ddd");
				$(this).css("border","0").hide();
			});
		},
		_initEvent: function(){
			this._init();
			this.tabShow();
			this.tabHide();
		}
	}

// 메일 폼 셀렉트 ////////////////////////////////////////////
	function MailFormSel(mailForm1,mailForm2,mailForm){
		this.$mailForm1 = null;
		this.$mailForm2 = null;
		this.$mailForm = null;
		this.$selectValue = null;

		this._init(mailForm1,mailForm2,mailForm);
		this._initEvent();
	}

	MailFormSel.prototype._init = function(mail1, mail2, mail){
		this.$mailForm1 = $(mail1);
		this.$mailForm2 = $(mail2);
		this.$mailForm = $(mail);
		this.$selectValue = this.$mailForm.val();
	}
	MailFormSel.prototype._valueChange = function(){
		var objThis = this;

		this.$mailForm.on('change', function(){
			objThis.$selectValue = $(this).val();

			if(objThis.$selectValue == "self" || objThis.$selectValue == ""){
				objThis.$mailForm2.val("");
			}else{
				objThis.$mailForm2.val(objThis.$selectValue);
			}

			objThis._inputBlur();
		});
	},
	MailFormSel.prototype._inputBlur =function(){
		this.$mailForm.val(
			this.$mailForm1.val()+"@"+this.$mailForm2.val()
		);
	},
	MailFormSel.prototype._initEvent =function(){
		var objThis = this;

		this._valueChange();

		this.$mailForm1.blur(function(){
			objThis._inputBlur();
		});
		this.$mailForm2.blur(function(){
			objThis._inputBlur();
		});
	}

// 버튼 선택 //////////////////////////////////////////////////////
	function SelectBtn(selectGroup){
		this.$selectGroup = null;
		this.$item = null;

		this._init(selectGroup);
		this._initEvent();
	}
	SelectBtn.prototype._init = function(selectGroup){
		this.$selectGroup = $(selectGroup);
		this.$item = this.$selectGroup.children();
	}
	SelectBtn.prototype._initEvent = function(){
		var objThis = this;

		this.$item.on('click', function(){
			objThis.$item.removeClass('on');
			$(this).addClass('on');
		});
	}

// 체크 아이템 삭제 ///////////////////////////////////////////////
	function chkItemDel(delItem){
		$('.select_del').on('click', function(){
			$(delItem).closest('.round_wrap').remove();
		});
	}

// 박스 이력 아코디언 ///////////////////////////////////////////
	function Accordion(group, btn){
		this.$selectGroup = null;
		this.$allBar = null;
		this.$toggleBtn = null;
		this.$toggleBar = null;
		this.$toggleItem = null;

		this._init(group, btn);
		this._initEvent();
	}

	Accordion.prototype._init = function(group, btn){
		this.$selectGroup = $(group);
		this.$allBar = this.$selectGroup.children('dt');
		this.$toggleBtn = $(btn);
	}
	Accordion.prototype._initEvent = function(){
		var objThis = this;

		this.$toggleBtn.on('click', function(){
			objThis.$toggleBar = $(this).closest('dt');
			objThis.$toggleItem = objThis.$toggleBar.next('dd');

			if( objThis.$toggleBar.hasClass('on') === true ){
				objThis.$toggleBar.removeClass('on');
			} else {
				objThis.$allBar.removeClass('on');
				objThis.$toggleBar.addClass('on');
			}
		});
	}


// FAQ 언 ///////////////////////////////////////////
