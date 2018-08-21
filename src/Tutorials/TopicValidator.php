<?php
/**
 * Created by PhpStorm.
 * User: DzaroD
 * Date: 2018-08-13
 * Time: 17:25
 */

namespace App\Tutorials;


class TopicValidator
{
    function deleteObjDuplicateFromArray($array, $keep_key_assoc = false){
        $duplicate_keys = array();
        $tmp = array();

        foreach ($array as $key => $val){
            // convert objects to arrays, in_array() does not support objects
            if (is_object($val))
                $val = (array)$val;

            if (!in_array($val, $tmp))
                $tmp[] = $val;
            else
                $duplicate_keys[] = $key;
        }

        foreach ($duplicate_keys as $key)
            unset($array[$key]);

        return $keep_key_assoc ? $array : array_values($array);
    }
}