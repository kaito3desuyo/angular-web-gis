import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-map-layer-add-dialog',
  templateUrl: './map-layer-add-dialog.component.html',
  styleUrls: ['./map-layer-add-dialog.component.scss']
})
export class MapLayerAddDialogComponent implements OnInit {

  formData = this.fb.group({
    name: ['', Validators.required],
    url: ['', Validators.required]
  });

  presets = defaultPresets;

  constructor(
    public dialogRef: MatDialogRef<MapLayerAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  selectPreset(event: MatSelectChange) {
    console.log('プリセット選択', event);
    this.formData.setValue(event.value);
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.formData.value);
  }

}

const defaultPresets: { groupName: string, children: { name: string, url: string }[] }[] = [
  {
    groupName: '国土地理院',
    children: [
      {
        name: '国土地理院 標準地図',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 淡色地図',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 English',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/english/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 数値地図25000（土地条件）',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/lcm25k_2012/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 土地条件図（初期整備版）',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/lcm25k/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 沿岸海域土地条件図（平成元年以降）',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/ccm1/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 沿岸海域土地条件図（昭和63年以前）',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/ccm2/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 火山基本図',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/vbm/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 火山基本図データ（基図）',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/vbmd_bm/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 火山基本図データ（陰影段彩図）',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/vbmd_colorrel/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 火山基本図データ（写真地図）',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/vbmd_pm/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 火山土地条件図',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/vlcd/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 数値地図5000（土地利用） 首都圏2005',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/lum4bl_capital2005/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 数値地図5000（土地利用） 首都圏2000',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/lum4bl_capital2000/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 数値地図5000（土地利用） 中部圏2003',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/lum4bl_chubu2003/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 数値地図5000（土地利用） 近畿圏2008',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/lum4bl_kinki2008/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 数値地図5000（土地利用） 近畿圏2001',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/lum4bl_kinki2001/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 土地利用図',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/lum200k/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 湖沼図（平成3年以降）',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/lake2/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 湖沼図（平成2年以前）',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/lake1/{z}/{x}/{y}.png',
      },
      {
        name: '国土地理院 湖沼データ',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/lakedata/{z}/{x}/{y}.png',
      },
    ]
  }
];
