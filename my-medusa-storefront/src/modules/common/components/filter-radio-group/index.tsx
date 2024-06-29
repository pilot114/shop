import { EllipseMiniSolid } from "@medusajs/icons"
import { Label, RadioGroup, Text, clx, Select } from "@medusajs/ui"
import { ChangeEvent } from "react"

type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
  'data-testid'?: string
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
  'data-testid': dataTestId
}: FilterRadioGroupProps) => {
    return (
        <div className="flex gap-x-3 flex-col gap-y-3">

            {/*<Text className="txt-compact-small-plus text-ui-fg-muted">{title}</Text>*/}

            <div className="w-[80%]">
                <Select
                    size="small"
                    onValueChange={(value) => {
                        handleChange(
                            {target: {value}}
                        )
                    }}
                >
                    <Select.Trigger>
                        <Select.Value placeholder="Sort by"/>
                    </Select.Trigger>
                    <Select.Content>
                        {items.map((item) => (
                            <Select.Item
                                key={item.value}
                                value={item.value}
                            >
                                {item.label}
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select>
            </div>
        </div>
    )
}

export default FilterRadioGroup
