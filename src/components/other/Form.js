import React, {Component} from 'react';

class Form extends Component {

    render() {
        return (
            <div className="App">

                <fieldset>
                    <legend>William-Dream</legend>

                    <div>
                        <label htmlFor="username">用户名</label>
                        <input type="text" name="username" value="李君波"/>
                    </div>

                    <div>
                        <label htmlFor="password">密码</label>
                        <input type="password" name="password" value="521"/>
                    </div>

                    <div>
                        <label htmlFor="sex">性别</label>
                        <input type="radio" name="sex" value="b"/>男
                        <input type="radio" name="sex" value="g"/>女
                    </div>

                    <div>
                        <label htmlFor="old">年龄</label>
                        <input type="number" name="old" min="1" max="100"/>
                    </div>

                    <div>
                        <label htmlFor="hy">行业</label>
                        <input type="checkbox" name="hy" value="j"/>金融
                        <input type="checkbox" name="hy" value="x"/>信息
                        <input type="checkbox" name="hy" value="x"/>餐饮
                    </div>

                    <div>
                        <label htmlFor="habby">爱好</label>
                        <select name="habby">
                            <option value="lq">篮球</option>
                            <option value="zq">足球</option>
                            <option value="wq">网球</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="height">身高(cm)</label>
                        <input type="range" name="height" min="100" max="200" step="5"/>
                    </div>

                    <div>
                        <label htmlFor="birthday">出生日期</label>
                        <input type="date" name="birthday" />
                    </div>

                    <div>
                        <label htmlFor="color">喜欢的颜色</label>
                        <input type="color" name="color" />
                    </div>

                    <div>
                        <label htmlFor="phone">手机</label>
                        <input type="tel" name="phone" />
                    </div>

                    <div>
                        <label htmlFor="email">邮件</label>
                        <input type="email" name="email" />
                    </div>

                    <div>
                        <label htmlFor="net">个人网站</label>
                        <input type="url" name="net" />
                    </div>

                    <div>
                        <label htmlFor="intro">自我介绍</label>
                        <textarea  name="intro" rows="3" cols="24">自我介绍</textarea>
                    </div>

                    <div>
                        <input type="submit" name="submit" value="提交"/>
                    </div>

                </fieldset>

            </div>
        );
    }

}

export default Form;
