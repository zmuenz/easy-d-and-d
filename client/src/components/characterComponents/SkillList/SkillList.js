import React from 'react';
import 'tachyons';

const SkillList = () => {
    return (
        <div className='col-sm-12 col-md-8'>
            <div id="skillList">
                <table>
                    <tr>
                        <th>Skill Name</th>
                        <th>Class Skill</th>
                        <th>Skill Bonus</th>
                        <th>AS Bonus</th>
                        <th>Ranks</th>
                        <th>Feats</th>
                        <th>Misc</th>
                        <th>AC Penalty</th>
                    </tr>
                    <tr>
                        <td>Acrobatics</td>
                        <td>
                            <div className='form-check'>
                                <input class="form-check-input" type="checkbox" value="" id="skillCheck"></input>
                            </div>
                        </td>
                        <td>SB</td>
                        <td>AS SB</td>
                        <td>
                            <input type='number'></input>
                        </td>
                        <td>Feats</td>
                        <td>Misc</td>
                        <td>
                            <input id='ACP' type='number'></input>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default SkillList;